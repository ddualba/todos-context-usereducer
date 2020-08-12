import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sizing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
	const dispatch = useContext(DispatchContext);
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDIT', id: id, newTask: value });
				// editTodo(id, value); <- replaced with dispatch
				reset();
				toggleEditForm();
			}}
			style={{ marginLeft: '1rem', width: '100%' }}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<TextField
					margin="normal"
					value={value}
					onChange={handleChange}
					fullWidth
					autoFocus
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							console.log('Escape key pressed');
							// write your functionality here
						}
					}}
				/>
				<Box pl={3}>
					<Button
						variant="contained"
						color="secondary"
						onClick={(e) => {
							toggleEditForm();
						}}
					>
						Cancel
					</Button>
				</Box>
			</div>
		</form>
	);
}

export default EditTodoForm;
