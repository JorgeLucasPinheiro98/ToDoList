import Container from "./components/Container";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className=" bg-black text-white">
      <Container>
        <Form/>
        <h1 className="text-center">Tarefas a cumprir</h1>
        <div className="bg-gray-600 m-1 p-1 flex">
          <input type="checkbox" name="" id="" className="mx-1"/>
          <p>Criar um portifolio</p>
        </div>
      </Container>
      
    </div>
  );
}
