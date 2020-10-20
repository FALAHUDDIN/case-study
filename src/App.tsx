import React from 'react';
import './App.scss';
import {Container, Grid} from "@material-ui/core";
import createSagaMiddleware from 'redux-saga';
import MessageSearch from "./components/MessageSearch/MessageSearch";
import MessageDetails from "./components/MessageDetails/MessageDetails";
import MessageList from "./components/MessageList/MessageList";
import rootSaga from "./state/sagas";
import rootReducer from "./state/reducers";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import MessageHeader from "./components/MessageHeader/MessageHeader";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga, {dispatch: store.dispatch})

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Container maxWidth="md">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <MessageHeader/>
                        </Grid>
                        <Grid item xs={12}>
                            <MessageSearch/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MessageList/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <MessageDetails/>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Provider>
    );
}

export default App
