import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
	const [markdown, setMarkdown] = useState(null)
	const [settings, setSettings] = useState({
		isGitHubFlavoredMarkdown: true,
		isRawHTMLSupported: false,
		isMathSupported: false,
	})

	const toggleGFM = () => {
		setSettings((prevSettings) => ({
			...prevSettings,
			isGitHubFlavoredMarkdown: !prevSettings.isGitHubFlavoredMarkdown,
		}))
	}
	const toggleRawHTML = () => {
		setSettings((prevSettings) => ({
			...prevSettings,
			isRawHTMLSupported: !prevSettings.isRawHTMLSupported,
		}))
	}

	const toggleMathSupport = () => {
		setSettings((prevSettings) => ({
			...prevSettings,
			isMathSupported: !prevSettings.isMathSupported,
		}))
	}

	// Fallback to default text if no markdown is provided
	const defaultText = `# Examples

~~~jsx
// JSX Code Block
import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = 'This ~is not~ strikethrough, but ~~this is~~!'

ReactDom.render(
  <Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
    {markdown}
  </Markdown>,
  document.body
)
~~~

- Math Support
	- The lift coefficient ($C_L$) is a dimensionless coefficient.
- Raw HTML
	- <h1>Hello World</h1>
- A paragraph with *emphasis* and **strong importance**.

- > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
	* [ ] todo
	* [x] done

- A table:

| a | b |
| - | - |

	`

	const value = {
		defaultText,
		markdown,
		setMarkdown,
		settings,
		toggleGFM,
		toggleRawHTML,
		toggleMathSupport,
	}

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
