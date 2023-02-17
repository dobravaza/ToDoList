const todoInput = document.querySelector('.todo-input')
const ulList = document.querySelector('ul')
const addBtn = document.querySelector('.btn-add')
const errorEmpty = document.querySelector('.error-empty')
const errorInfo = document.querySelector('.error-info')
const popup = document.querySelector('.popup')
const editAccept = document.querySelector('.accept')
const editCancel = document.querySelector('.cancel')
// const divTools = document.createElement('div')
// console.log(divTools)
// divTools.appendChild(ulList)

const pushToList = userInput => {
	if (userInput.trim() === '') {
		errorEmpty.textContent = 'Musisz wpisać treść zadania!'
	} else {
		errorEmpty.textContent = ''
		todoInput.value = ''

		const newTask = document.createElement('li')
		newTask.setAttribute('data-id', 'test2')

		const taskText = document.createElement('span')
		taskText.textContent = userInput

		const divTools = document.createElement('div')
		divTools.classList.add('tools')

		const completeBtn = document.createElement('button')
		completeBtn.classList.add('complete')
		const completeIcon = document.createElement('i')
		completeIcon.classList.add('fas', 'fa-check')
		completeBtn.appendChild(completeIcon)

		const editBtn = document.createElement('button')
		editBtn.classList.add('edit')
		editBtn.textContent = 'EDIT'

		const deleteBtn = document.createElement('button')
		deleteBtn.classList.add('delete')
		const deleteIcon = document.createElement('i')
		deleteIcon.classList.add('fas', 'fa-times')
		deleteBtn.appendChild(deleteIcon)

		divTools.appendChild(completeBtn)
		divTools.appendChild(editBtn)
		divTools.appendChild(deleteBtn)

		newTask.appendChild(taskText)
		newTask.appendChild(divTools)

		ulList.appendChild(newTask)

		const taskItems = document.querySelectorAll('li')
		if (newTask) {
			errorInfo.textContent = ''
		}
		for (let i = 0; i < taskItems.length; i++) {
			taskItems[i].setAttribute('data-id', 'test' + (i + 1))
		}

		deleteBtn.addEventListener('click', e => {
			const listItem = event.target.closest('li')
			listItem.remove()
		})

		completeBtn.addEventListener('click', () => {
			console.log(taskText)
			taskText.classList.toggle('completed')
		})
		let test = ''
		let taskToEdit = ''
		let usersInput = ''
		const popUp = e => {
			popup.style.display = 'flex'
			const editAccept = document.querySelector('.accept')
			const editCancel = document.querySelector('.cancel')
			const popupInput = document.querySelector('.popup-input')

			// Zapisz id zadania, które chcemy edytować
			const taskId = newTask.getAttribute('data-id')

			// Ustaw wartość pola input na aktualną treść zadania
			taskToEdit = document.querySelector(`li[data-id="${taskId}"] span`)
			popupInput.addEventListener('keyup', e => {
				// console.log(e.target.value)
				usersInput = e.target.value
				// console.log(usersInput)
			})

			// test = popupInput.value = taskToEdit.textContent

			editCancel.addEventListener('click', () => {
				popup.style.display = 'none'
			})
		}

		editAccept.addEventListener('click', () => {
			const newTaskText = usersInput
			console.log(usersInput)
			if (newTaskText !== '') {
				taskToEdit.textContent = newTaskText
			}

			popup.style.display = 'none'
		})

		editBtn.addEventListener('click', popUp)
	}
}

todoInput.addEventListener('keydown', e => {
	const userInput = e.target.value

	if (e.keyCode === 13) {
		pushToList(userInput)
	}
	// console.log(userInput)
})

addBtn.addEventListener('click', () => {
	const userInput = todoInput.value
	pushToList(userInput)
})
