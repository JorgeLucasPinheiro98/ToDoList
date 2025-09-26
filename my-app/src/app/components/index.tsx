type ContainerProps = {
    children: React.ReactNode
}

export default function Container({children}:ContainerProps){
    return (
        <div className="flex justify-center items-center h-screen m-1">
            <div className="bg-gray-500 p-2 px-3 m-1">
                <h1 className="text-center">Lista de Tarefas</h1>
                {children}
            </div>
        </div>
    )
}