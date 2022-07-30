import { render } from "@testing-library/react"
import { GriItem } from "../../src/components/GriItem"

describe('Pruebas gifItem', () => {

    const title = 'Saitana';
    const url = 'https://preuba.com'

    test('snapshot', () => {
        const { container } = render(<GriItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    })

    test('imagen con url y alt', () => { 
        
        render(<GriItem title={title} url={url} />);

        expect(screnn.getByRole('img').src).toBe(url);
        expect(screnn.getByRole('img').alt).toBe(title);

     })

     test('mostrar titulo', () => { 
        
        render(<GriItem title={title} url={url} />);
        expect(screnn.getByText(title)).toBeTruthy();

      })

})