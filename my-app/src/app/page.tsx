import Container from "./components/Container";

export default function Home() {
  return (
    <div className=" bg-black text-white">
      <Container>
        <form action="">
          <div className="flex justify-between items-center">
            <label htmlFor=""></label>
            <input type="text" value="" placeholder="Digite sua Tarefa" className="bg-amber-50 m-1 w-full"/>
            <button className="bg-gray-500 px-3">Enviar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
