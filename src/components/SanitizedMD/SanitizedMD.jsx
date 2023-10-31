import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Card, useColorScheme } from '@mui/joy'
import remarkGfm from 'remark-gfm' // GitHub Flavored Markdown
import rehypeRaw from 'rehype-raw' // HTML support
import rehypeKatex from 'rehype-katex' // Math support
import remarkMath from 'remark-math' // Math support
import 'katex/dist/katex.min.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark, dracula, funky, ghcolors, hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism'
import darkCode from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus'
import lightCode from 'react-syntax-highlighter/dist/esm/styles/prism/vs'

import { useAppContext } from '../../context/'

const SanitizedMD = () => {
	const { markdown, settings, defaultText } = useAppContext()

	const { mode } = useColorScheme()

	const [remarkPlugins, setRemarkPlugins] = useState([])

	const [rehypePlugins, setRehypePlugins] = useState([])

	useEffect(() => {
		// Update remarkPlugins and rehypePlugins based on settings
		const updatedRemarkPlugins = []
		const updatedRehypePlugins = []

		if (settings.isGitHubFlavoredMarkdown) {
			updatedRemarkPlugins.push(remarkGfm)
		}
		if (settings.isRawHTMLSupported) {
			updatedRehypePlugins.push(rehypeRaw)
		}
		if (settings.isMathSupported) {
			updatedRemarkPlugins.push(remarkMath)
			updatedRehypePlugins.push(rehypeKatex)
		}

		setRemarkPlugins(updatedRemarkPlugins)
		setRehypePlugins(updatedRehypePlugins)
	}, [settings])

	return (
		<Card component={'section'} variant='plain' sx={(theme) => ({ height: '100%', width: '100%', overflowX: 'auto', boxShadow: theme.shadow.md, '--joy-shadowChannel': theme.vars.palette.primary.mainChannel, '--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.24)', '& *': { wordBreak: 'break-word' } })}>
			{/* {!markdown && <h3 style={{ textAlign: 'center' }}>Enter Some Markdown </h3>} */}
			<Markdown
				remarkPlugins={remarkPlugins}
				rehypePlugins={rehypePlugins}
				components={{
					code(props) {
						const { children, className, ...rest } = props
						const match = /language-(\w+)/.exec(className || '')
						return match ? (
							<SyntaxHighlighter {...rest} style={mode === 'dark' ? darkCode : lightCode} customStyle={{ borderRadius: '0.2rem' }} language={match[1]} PreTag='div'>
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						) : (
							<SyntaxHighlighter {...rest} style={mode === 'dark' ? darkCode : lightCode} customStyle={{ width: 'fit-content', borderRadius: '0.2rem' }} className={className ?? 'no-lang'}>
								{children}
							</SyntaxHighlighter>
						)
					},
				}}>
				{markdown ?? defaultText}
			</Markdown>
		</Card>
	)
}

export default SanitizedMD
