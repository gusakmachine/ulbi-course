import Sidebar from "./Sidebar";
import {fireEvent, screen} from "@testing-library/react";
import {renderWithTranslation} from "shared/lib/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test Sidebar toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});