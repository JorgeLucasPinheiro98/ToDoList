import Container from "./components/Container";

export default function Home() {
  return (
    <div className="">
      <Container>
        <form action="">
          <div className="flex justify-between items-center">
            <label htmlFor="">Tarefa</label>
            <input type="text" value="" className="bg-amber-50 m-1 w-full"/>
            <button className="bg-gray-500 rounded-4xl">Enviar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}
