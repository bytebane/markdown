import { Download } from '@mui/icons-material'
import { useAppContext } from '../../context/'
import { Box, IconButton, Textarea, Tooltip } from '@mui/joy'

const RawInput = () => {
	const { setMarkdown, markdown, defaultText } = useAppContext()

	const handleChange = (e) => {
		const inputText = e.target.value
		setMarkdown(inputText)
	}

	const handleDownload = () => {
		const textDataBlob = new Blob([markdown], { type: 'text/plain' })

		const downloadUrl = window.URL.createObjectURL(textDataBlob)

		const downloadLink = document.createElement('a')
		downloadLink.download = `md-${Date.now()}.md`
		downloadLink.href = downloadUrl
		downloadLink.click()
	}

	return (
		<Box component={'section'} variant='plain' sx={{ height: '100%', width: '100%', position: 'relative' }}>
			<Textarea
				autoFocus
				name='input'
				id='input'
				variant='plain'
				maxRows={10}
				placeholder='Paste/Type your markdown here'
				defaultValue={defaultText}
				onChange={handleChange}
				sx={(theme) => ({
					width: '100%',
					height: '100%',
					overflow: 'scroll',
					padding: '2rem 1rem',
					boxShadow: theme.shadow.sm,
					'--joy-shadowChannel': theme.vars.palette.primary.mainChannel,
					'--joy-shadowRing': 'inset 0 -3px 0 rgba(0 0 0 / 0.24)',
					'&::before': {
						border: '1.5px solid var(--Textarea-focusedHighlight)',
						transform: 'scaleX(0)',
						left: '2.5px',
						right: '2.5px',
						bottom: 0,
						top: 'unset',
						transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
						borderRadius: 0,
						borderBottomLeftRadius: '64px 20px',
						borderBottomRightRadius: '64px 20px',
					},
					'&:focus-within::before': {
						transform: 'scaleX(1)',
					},
				})}
			/>
			<Tooltip title='Download .md File' variant='plain' placement='left' arrow>
				<IconButton variant='plain' color='neutral' sx={{ ml: 'auto', '--IconButton-size': { md: '50px' }, position: 'absolute', bottom: '1.5rem', right: '1.25rem', borderRadius: '50%' }} onClick={handleDownload}>
					<Download />
				</IconButton>
			</Tooltip>
		</Box>
	)
}

export default RawInput
