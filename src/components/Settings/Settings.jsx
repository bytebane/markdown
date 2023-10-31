import { DialogContent, DialogTitle, Divider, IconButton, Modal, ModalClose, ModalDialog, Radio, radioClasses, RadioGroup, Sheet, Switch, Tooltip, Typography, useColorScheme } from '@mui/joy'
import React from 'react'
import { DarkMode, Done, LightMode, Settings as SettingsIcon } from '@mui/icons-material'
import { useAppContext } from '../../context/'
import styled from '@emotion/styled'
import { themesList } from './../../theme/index'
import { useThemeContext } from '../../context/'

const Settings = () => {
	const [open, setOpen] = React.useState(false)
	const { settings, toggleGFM, toggleRawHTML, toggleMathSupport } = useAppContext()

	const { themeColorId, toggleThemeColor } = useThemeContext()

	const { mode, setMode } = useColorScheme()

	const toggleThemeMode = () => {
		setMode(mode === 'dark' ? 'light' : 'dark')
	}

	const Typograph = styled(Typography)`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`

	return (
		<>
			<Tooltip title='Settings' variant='plain' arrow placement='left'>
				<IconButton
					sx={{
						'--IconButton-size': { md: '50px' },
						position: 'absolute',
						bottom: '3rem',
						right: '2rem',
						borderRadius: '50%',
					}}
					onClick={() => setOpen(true)}>
					<SettingsIcon />
				</IconButton>
			</Tooltip>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog variant='outlined'>
					<ModalClose />
					<DialogTitle>
						<SettingsIcon /> <Typograph level='title-lg'>Settings</Typograph>
					</DialogTitle>
					<Divider />
					<DialogContent sx={{ p: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1 }}>
						{/* Settings Options mapped */}
						{[
							{
								label: 'Add Math Support:',
								value: settings.isMathSupported,
								onChangeFn: () => toggleMathSupport(),
							},
							{
								label: 'Github Flavoured Md:',
								value: settings.isGitHubFlavoredMarkdown,
								onChangeFn: () => toggleGFM(),
							},
							{
								label: 'Allow HTML elements:',
								value: settings.isRawHTMLSupported,
								onChangeFn: () => toggleRawHTML(),
							},
							{
								label: 'Theme Mode:',
								value: mode === 'dark',
								onChangeFn: () => toggleThemeMode(),
								slotProps: {
									thumb: {
										children: <>{mode === 'light' ? <LightMode /> : <DarkMode />}</>,
									},
								},
							},
						].map((item, i) => {
							return (
								<Typograph
									key={i}
									component='label'
									level='body-md'
									endDecorator={
										<Switch
											sx={{
												'--Switch-trackWidth': '50px',
												'--Switch-thumbSize': '22px',
											}}
											slotProps={item.slotProps}
											checked={item.value}
											onChange={item.onChangeFn}
										/>
									}>
									{item.label}
								</Typograph>
							)
						})}
						{/* Theme Colors */}
						<RadioGroup aria-labelledby='product-color-attribute' defaultValue='warning' sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
							{themesList.map((theme, i) => {
								return (
									<Sheet
										key={i}
										sx={{
											position: 'relative',
											width: 40,
											height: 40,
											flexShrink: 0,
											bgcolor: theme.palette.primary[500],
											borderRadius: '50%',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										<Radio
											overlay
											variant='solid'
											color='primary'
											checkedIcon={<Done fontSize='xl2' />}
											value={i}
											checked={themeColorId === i}
											onChange={toggleThemeColor}
											slotProps={{
												input: { 'aria-label': theme.palette.primary[500] },
												radio: {
													sx: {
														display: 'contents',
														'--variant-borderWidth': '2px',
													},
												},
											}}
											sx={{
												'--joy-focus-outlineOffset': '4px',
												'--joy-activeFocus-outlineOffset': '4px',
												'--joy-palette-focusVisible': theme.palette.primary[500],
												[`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {},
											}}
										/>
									</Sheet>
								)
							})}
						</RadioGroup>
					</DialogContent>
				</ModalDialog>
			</Modal>
		</>
	)
}

export default Settings
