export default function App() {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="bg-gray-400 m-4 rounded-sm h-2/3 w-2/3">
        <h1 className="text-center">To-Do-List</h1>
        <div className="flex justify-center h-8">
          <input
            type="text"
            placeholder="Digite a tarefa"
            className="bg-white border-2 rounded-sm m-1 px-1 w-screen"
          />
          <input
            type="button"
            value="Salvar"
            className="bg-gray-300  w-1/3 rounded-sm m-1"
          />
        </div>
        <p>sos</p>
      </div>
    </div>
  );
}
