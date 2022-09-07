import {screen, render} from "@testing-library/react";
import {Message} from "../Message";

describe('message component test', () => {
    it('message have a author', () => {
        render(<Message _id={'134'} text={'hello'} author={'super@mail.ru'} user={'nonger@mail.ru'}/>)

        expect(screen.getByText(/super@mail.ru/i)).toBeInTheDocument()
    })

    it('message have a text', () => {
        render(<Message _id={'134'} text={'hello'} author={'super@mail.ru'} user={'nonger@mail.ru'}/>)

        expect(screen.getByText(/hello/i)).toBeInTheDocument()
    })

    it('message not have a author', () => {
        render(<Message _id={'134'} text={'hello'} author={'super@mail.ru'} user={'nonger@mail.ru'}/>)

        expect(screen.queryByText(/nonger@mail.ru/i)).not.toBeInTheDocument()
    })
})


