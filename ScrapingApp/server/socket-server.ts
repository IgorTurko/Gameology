/// <reference path="./typings/index.d.ts"/>

import * as http  from "http";
import * as io from "socket.io";

import { eventBus, EventNames } from "./services/event-bus";

export default function run(server: http.Server) {
    const ioServer = io(server);

    setInterval(() => {

        const connectedClients = ioServer.clients().connected;

        if (connectedClients) {
            Object.keys(connectedClients)
                .forEach(k => {
                    const socket = connectedClients[k];
                    if (socket && socket.connected) {
                        socket.emit("Timeout", {
                            data: "test"
                        });
                    }
                });
        }

    }, 1000);
}