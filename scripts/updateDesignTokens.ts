/* eslint-disable @typescript-eslint/no-var-requires */
const nodeFetch = require('node-fetch')
const { writeFile } = require('fs').promises

function pxToRem(px: string | number) {
  return parseInt(px + '') / 16 + 'rem'
}

function relRGBToAbsRGB(fill) {
  const r = Math.round(fill.color.r * 255)
  const g = Math.round(fill.color.g * 255)
  const b = Math.round(fill.color.b * 255)
  const a = Math.round((fill.opacity || 1) * 100) / 100

  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`
}

function parseThemesAndVariants(items, styles) {
  const themes = {}
  const colorVariants = {}

  items.forEach((item) => {
    if (item.name === 'Neutral') {
      const variants = item.children
      if (variants) {
        variants.forEach((variant) => {
          const variantName = variant.name.toLowerCase()
          const colorName = `neutral${
            variantName === 'default' ? '' : `-${variantName}`
          }`
          colorVariants[colorName] = relRGBToAbsRGB(variant.fills[0])
        })
      }
    } else if (item.name === 'White') {
      const variants = item.children
      if (variants) {
        variants.forEach((variant) => {
          const variantName = variant.name.toLowerCase()
          const subVariants = variant.children

          if (variantName === 'default') {
            colorVariants['wht'] = relRGBToAbsRGB(variant.fills[0])
          } else if (variant.children) {
            if (subVariants) {
              subVariants.forEach((subVariant) => {
                const subVariantName = subVariant.name.toLowerCase()
                const colorName = `wht-${variantName}-${subVariantName}`

                if (subVariant.styles?.fill) {
                  const referenceName: string = styles[
                    subVariant.styles.fill
                  ]?.name
                    .split('_')[0]
                    .replaceAll(/[a-z0]/g, '')
                    .toLowerCase()
                  const [colorNumberStr] = referenceName.match(/\d+/) ?? []
                  const colorNumber = Number.parseInt(colorNumberStr)
                  colorVariants[colorName] = colorNumber
                    ? referenceName.replace(/\d+/g, '') +
                      (colorNumber > 9 ? colorNumber * 10 : colorNumber * 100)
                    : referenceName.replace(/-$/, '')
                } else {
                  colorVariants[colorName] = relRGBToAbsRGB(subVariant.fills[0])
                }
              })
            }
          }
        })
      }
    } else if (!item.name.startsWith('_')) {
      const theme = {}
      const themeName = item.name.toLowerCase()

      const colorGroups = item.children
      colorGroups.forEach((colorGroup) => {
        const groupName = colorGroup.name.toLowerCase()
        const variants = colorGroup.children
        if (variants) {
          variants.forEach((variant) => {
            const variantName = variant.name.toLowerCase()
            const subVariants = variant.children

            if (variant.children) {
              if (subVariants) {
                subVariants.forEach((subVariant) => {
                  const subVariantName = subVariant.name.toLowerCase()
                  const colorName = `${groupName}-${variantName}-${subVariantName}`

                  if (subVariant.styles?.fill) {
                    const [baseColorName, ...rest] = styles[
                      subVariant.styles.fill
                    ]?.name
                      .split('_')[0]
                      .split('-')
                    const referenceName =
                      baseColorName.replaceAll(/[a-z0]/g, '').toLowerCase() +
                      '-' +
                      rest.join('-')
                    const [colorNumberStr] = referenceName.match(/\d+/) ?? []
                    const colorNumber = Number.parseInt(colorNumberStr)
                    theme[colorName] = colorNumber
                      ? referenceName.replace(/\d+/g, '') +
                        (colorNumber > 9 ? colorNumber * 10 : colorNumber * 100)
                      : referenceName.replace(/-$/, '')
                  } else {
                    theme[colorName] = relRGBToAbsRGB(subVariant.fills[0])
                  }
                })
              }
            } else {
              const colorName = `${groupName}${
                variantName === 'default' ? '' : `-${variantName}`
              }`

              if (variant.styles?.fill) {
                const referenceName = styles[variant.styles.fill]?.name
                  .split('_')[0]
                  .replaceAll(/[a-z0]/g, '')
                  .toLowerCase()
                const [colorNumber] = referenceName.match(/\d+/) ?? []
                theme[colorName] = colorNumber
                  ? referenceName.replaceAll(/\d+/g, '') +
                    (colorNumber > 9 ? colorNumber * 10 : colorNumber * 100)
                  : referenceName.replace(/-$/, '')
              } else {
                theme[colorName] = relRGBToAbsRGB(variant.fills[0])
              }
            }
          })
        }
      })

      if (Object.keys(themes).length === 0) {
        theme['default'] = true
      }

      themes[themeName] = theme
    }
  })

  return { themes, variants: colorVariants }
}

function parseShadows(items) {
  const shadows = {}

  for (const item of items) {
    shadows[item.name.split(' ')[0].toLowerCase()] = item.effects
      .map((effect) => {
        const col = effect.color
        return `${pxToRem(effect.offset.x)} ${pxToRem(
          effect.offset.y
        )} ${pxToRem(effect.radius)} rgba(${Math.round(
          col.r * 255
        )}, ${Math.round(col.g * 255)}, ${Math.round(col.b * 255)}, ${
          Math.round(col.a * 100) / 100
        })`
      })
      .join(', ')
  }

  return shadows
}

function parseColors(items) {
  const colors = {}

  for (const item of items) {
    if (item.fills?.length) {
      colors[item.name.split('_')[0].toLowerCase()] = relRGBToAbsRGB(
        item.fills[0]
      )
    }
  }

  return colors
}

function parseTypography(itemsDisplay, itemsBody) {
  const typography = {
    display: {},
    body: {},
  }

  for (const item of itemsDisplay) {
    typography.display[item.name.split(' ')[0].toLowerCase()] = {
      fontSize: pxToRem(item.style.fontSize),
      lineHeight: Math.round(item.style.lineHeightPercentFontSize) + '%',
      fontFamily: item.style.fontFamily === 'Lato' ? 'Lato' : 'MWeb',
    }
  }

  const fontNameMap = {
    'XS Paragraph': 'body-xs',
    'S Paragraph': 'body-s',
    'M Paragraph': 'body-m',
    'L Paragraph': 'body-l',
    'XL Paragraph': 'body-xl',
    'Caption Medium': 'cap-m',
    'Caption Large': 'cap-l',
    'Mobile Label': 'label-s',
    'Default Label': 'label-m',
  }

  for (const item of itemsBody) {
    typography.body[fontNameMap[item.name]] = {
      fontSize: pxToRem(item.style.fontSize),
      lineHeight: Math.round(item.style.lineHeightPercentFontSize) + '%',
      fontFamily: item.style.fontFamily === 'Lato' ? 'Lato' : 'MWeb',
    }
  }

  return typography
}

function parseSpacings(items) {
  const spacings = {}

  for (const item of items) {
    spacings[item.name.split('$spacing-')[1]] = pxToRem(
      item.absoluteBoundingBox.height
    )
  }

  return spacings
}

async function getTokensFromFigma(
  figmaId = 'JcDMeUwec9e185HfBgT9XE',
  nodeId = '2615:28396'
) {
  const result = await nodeFetch(
    `https://api.figma.com/v1/files/${figmaId}/nodes?ids=${nodeId}`,
    {
      method: 'GET',
      headers: {
        'X-Figma-Token': process.env.FIGMA_API_KEY,
      },
    }
  )
  const { document, styles } = (await result.json()).nodes[nodeId]
  const { children: figmaData } = document
  const { themes, variants } = parseThemesAndVariants(
    figmaData.find(({ name }) => name.indexOf('Theme Colors') === 0).children,
    styles
  )

  const tokens = {
    themes,
    shadows: parseShadows(
      figmaData.find((child) => child.name === 'Shadows').children
    ),
    spacings: parseSpacings(
      figmaData.find((child) => child.name === 'Spacings').children
    ),
    colors: {
      ...variants,
      ...parseColors(
        figmaData.find((child) => child.name === 'Accessible Colors').children
      ),
    },
    typography: parseTypography(
      figmaData.find((child) => child.name === 'Headlines').children,
      figmaData.find((child) => child.name === 'Paragraphs').children
    ),
    borderRadii: {
      full: '999rem',
      s: '0.125rem',
      m: '0.25rem',
      l: '0.5rem',
    },
  }

  return tokens
}

function boxShadowToDropShadow(boxShadow: string): string {
  const shadows = boxShadow.replace('), ', ')| ').split('| ')
  return shadows
    .map((shadow) => {
      const [offsetX, offsetY, blurRadius, ...color] = shadow.split(' ')
      return `drop-shadow(${offsetX} ${offsetY} ${blurRadius} ${color.join(
        ' '
      )})`
    })
    .join(' ')
}

function generateShadows(tokens) {
  return writeFile(
    './src/liquid/global/styles/shadows/shadows.css',
    '/* autogenerated */\n:root {\n' +
      Object.keys(tokens)
        .sort()
        .map((key) => `  --ld-shadow-${key}: ${tokens[key]};`)
        .join('\n') +
      '\n' +
      Object.keys(tokens)
        .sort()
        .map(
          (key) =>
            `  --ld-drop-shadow-${key}: ${boxShadowToDropShadow(tokens[key])};`
        )
        .join('\n') +
      '\n}\n',
    'utf8'
  )
}

function generateColors(colorTokens, themes) {
  const colorVariables = []
  const defaultThemeVariables = []
  const themeSelectors = []

  // Basic colors
  Object.keys(colorTokens).forEach((key) => {
    const val = colorTokens[key]
    if (key.includes('/default')) {
      colorVariables.push(`  --ld-col-${key.split('/default')[0]}: ${val};`)
      const colorKey = key
        .replace(/\d/g, '')
        .replace('/default', '')
        .replace(/-$/, '')
      colorVariables.push(`  --ld-col-${colorKey}: ${val};`)
    } else {
      colorVariables.push(`  --ld-col-${key}: ${val};`)
    }
  })
  // Theme specific colors
  Object.keys(themes).forEach((themeName) => {
    const theme = themes[themeName]
    themeSelectors.push(`.ld-theme-${themeName},
    [class*='ld-theme'] .ld-theme-${themeName} {`)
    Object.keys(theme).forEach((colorGroupName) => {
      const colorGroup = theme[colorGroupName]

      if (colorGroupName === 'default') {
        return
      }

      const variableValue =
        colorGroup.indexOf('rgb') === 0
          ? colorGroup
          : `var(--ld-col-${colorGroup})`

      colorVariables.push(
        `  --ld-thm-${themeName}-${colorGroupName}: ${variableValue};`
      )
      themeSelectors.push(
        `  --ld-thm-${colorGroupName}: var(--ld-thm-${themeName}-${colorGroupName});`
      )
      if (theme.default) {
        defaultThemeVariables.push(
          `  --ld-thm-${colorGroupName}: var(--ld-thm-${themeName}-${colorGroupName});`
        )
      }
    })
    themeSelectors.push(`}`)
  })

  return writeFile(
    './src/liquid/global/styles/colors/colors.css',
    [
      '/* autogenerated */',
      ':root {',
      ...colorVariables.sort(),
      ...defaultThemeVariables,
      '}',
      ...themeSelectors,
      '',
    ].join('\n'),
    'utf8'
  )
}

function generateSpacings(tokens) {
  return writeFile(
    './src/liquid/global/styles/spacings/spacings.css',
    '/* autogenerated */\n:root {\n' +
      Object.keys(tokens)
        .sort((key) => parseInt(key))
        .map((key) => `  --ld-sp-${key}: ${tokens[key]};`)
        .join('\n') +
      '\n}\n',
    'utf8'
  )
}

function generateTypography(tokens) {
  return writeFile(
    './src/liquid/global/styles/typography/typography.css',
    '/* autogenerated */\n:root {\n' +
      "  --ld-font-body: 'Lato', Helvetica, Arial, sans-serif;\n" +
      "  --ld-font-display: 'MWeb', Helvetica, Arial, sans-serif;\n" +
      Object.keys(tokens.display)
        .sort()
        .map((key) => {
          const val = tokens.display[key]
          return `  --ld-typo-${key}: ${val.fontSize} / ${val.lineHeight} '${
            val.fontFamily === 'Lato' ? 'Lato' : 'MWeb'
          }', Helvetica, Arial, sans-serif;`
        })
        .join('\n') +
      '\n' +
      Object.keys(tokens.body)
        .sort()
        .map((key) => {
          const val = tokens.body[key]
          return `  --ld-typo-${key}: ${val.fontSize} / ${val.lineHeight} 'Lato', Helvetica, Arial, sans-serif;`
        })
        .join('\n') +
      '\n}\n',
    'utf8'
  )
}

function generateBorderRadii(tokens) {
  return writeFile(
    './src/liquid/global/styles/border-radius/border-radius.css',
    '/* autogenerated */\n:root {\n' +
      Object.keys(tokens)
        .sort((key) => parseInt(key))
        .map((key) => `  --ld-br-${key}: ${tokens[key]};`)
        .join('\n') +
      '\n}\n',
    'utf8'
  )
}

function generateCSSTokenFiles(tokenCollection) {
  return Promise.all([
    generateShadows(tokenCollection.shadows),
    generateColors(tokenCollection.colors, tokenCollection.themes),
    generateSpacings(tokenCollection.spacings),
    generateTypography(tokenCollection.typography),
    generateBorderRadii(tokenCollection.borderRadii),
  ])
}

function generateJSONTokenFile(tokenCollection) {
  writeFile(
    './src/liquid/global/styles/design-tokens.json',
    JSON.stringify(tokenCollection, null, 2),
    'utf8'
  )
}

// eslint-disable-next-line @typescript-eslint/no-extra-semi
;(async () => {
  try {
    const tokenCollection = await getTokensFromFigma()
    await generateJSONTokenFile(tokenCollection)
    await generateCSSTokenFiles(tokenCollection)
  } catch (err) {
    console.error('error', err)
  }
})()
