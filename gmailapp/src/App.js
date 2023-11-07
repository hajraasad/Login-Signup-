import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Author/Login";
import Signup from "./Author/Signup";
import {persister, Store} from "./Redux/Store";
import {PersistGate} from "redux-persist/integration/react";
import Compose from "./Components/Compose";
import Inbox from "./Components/Inbox";
import Sent from "./Components/Sent";


function App() {
    return (
        <div>
            <Provider store={Store}>
                <PersistGate persistor={persister} loading={null}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/signup' element={<Signup/>}/>
                            <Route path='/inbox' element={<Inbox/>}/>

                            <Route path='/compose' element={<Compose/>}/>

                            <Route path='/sent' element={<Sent/>}/>
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
