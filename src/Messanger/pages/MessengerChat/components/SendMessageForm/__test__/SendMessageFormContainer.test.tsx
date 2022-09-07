import {SendMessageFormContainer} from "../SendMessageFormContainer";
import {renderWithProviders} from "src/utils/test-utils";
import {fireEvent, screen} from "@testing-library/react";


describe('send message form container', () => {
    it('form in document', () => {
        renderWithProviders(<SendMessageFormContainer/>)
        const component = screen.getByTestId('input-message-text')
        expect(component).toBeInTheDocument()
    })

    it('have input with label "message"', () => {

        renderWithProviders(<SendMessageFormContainer/>)
        const input = screen.getByLabelText('message')
        fireEvent.change(input, {target: {value: '12345'}})

        expect(input.getAttribute('value')).toBe('12345')

        fireEvent.click(screen.getByTestId('input-button'))

        expect(input.getAttribute('value')).toBe('')

    })
})
