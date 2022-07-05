import { defineComponent, ref } from "vue";
export default defineComponent ({
  setup (props) {
    let title = ref('')
    let todos = ref([{ title: "学习Vue3", done: true}, { title: "睡觉", done: false }])
    function addTodo () {
      todos.value.push({
        title: title.value
      })
      title = ''
    }
    return () => <div>
      <input type='text' vModel={title.value}></input>
      <button onClick={addTodo}>click</button>
      <ul>
        {
          todos.value.length ? todos.value.map(todo => {
            return <li>{todo.title}</li>
          }) : <li>noData</li>
        }
      </ul>
    </div>
  }
})