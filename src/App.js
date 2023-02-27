import "./App.css";
import Navbar from "./components/Navbar";
import CreateTodos from "./components/CreateTodos";
import TodoLists from "./components/TodoLists";
import Footer from "./components/Footer";

function App() {
    return (
        <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <Navbar />
            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <CreateTodos />
                <hr class="mt-4" />
                <TodoLists />
                <hr class="mt-4" />
                <Footer />
            </div>
        </div>
    );
}

export default App;
