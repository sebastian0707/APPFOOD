import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <OrdersBoard
            icon="⏰"
            title="Fila de Espera"/>
            <OrdersBoard
            icon="👨‍🍳"
            title="Em Preparação"/>
            <OrdersBoard
            icon="✅"
            title="Pronto"/>
        </Container>
    )
}