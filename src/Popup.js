import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack, Item } from "@mui/material";

const clientTypes = [
    {
      value: 'Фил. лицо',
      label: 'Фил. лицо',
    },
    {
      value: 'Юр. лицо',
      label: 'Юр. лицо',
    },

  ];

export default function Popup(props) {
	const { open, onClose } = props;

	return (
		<div>
			<Dialog open={open} onClose={onClose}>
				<DialogContent>
					<Box sx={{ width: 500 }}>
						<Stack
							direction="row"
							justifyContent="space-around"
							spacing={10}
							alignItems="center"
						>
							<DialogContentText>ФИО</DialogContentText>
							<TextField
								autoFocus
								margin="none"
								id="name"
								label="ФИО"
								type="name"
								fullWidth
								variant="outlined"
							/>
						</Stack>
					</Box>
				</DialogContent>
				<DialogContent>
					<Box sx={{ width: 500 }}>
						<Stack
							direction="row"
							justifyContent="space-around"
							spacing={6}
							alignItems="center"
						>
							<DialogContentText>Телефон</DialogContentText>
							<TextField
								autoFocus
								margin="none"
								id="phone"
								label="Телефон"
								type="phone"
								fullWidth
								variant="outlined"
							/>
						</Stack>
					</Box>
				</DialogContent>
				<DialogContent>
					<Box sx={{ width: 500 }}>
						<Stack
							direction="row"
							justifyContent="space-around"
							spacing={5}
							alignItems="center"
						>
							<DialogContentText>Физ/Юр лицо</DialogContentText>
							<TextField
								id="client-type"
								select
								defaultValue="Физ. лицо"
								SelectProps={{
									native: true,
								}}
                                fullWidth
								variant="outlined"
							>
								{clientTypes.map((option) => (
									<option
										key={option.value}
										value={option.value}
									>
										{option.label}
									</option>
								))}
							</TextField>
						</Stack>
					</Box>
				</DialogContent>
			</Dialog>
		</div>
	);
}
