import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import { TodosContext } from './context/todos.context';

function Todo({ id, task, completed }) {
	const { removeTodo, toggleTodo } = useContext(TodosContext);
	const [ isEditing, toggleIsEditing ] = useToggleState(false);
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm id={id} task={task} toggleEditForm={toggleIsEditing} />
			) : (
				<React.Fragment>
					<Checkbox
						tabIndex={-1}
						checked={completed}
						onClick={() => toggleTodo(id)}
					/>
					<ListItemText
						style={{ textDecoration: completed ? 'line-through' : 'none' }}
					>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<Tooltip title="Delete" placement="top" arrow>
							<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Edit" placement="top" arrow>
							<IconButton aria-label="Edit" onClick={toggleIsEditing}>
								<EditIcon />
							</IconButton>
						</Tooltip>
					</ListItemSecondaryAction>
				</React.Fragment>
			)}
		</ListItem>
	);
}

export default Todo;
