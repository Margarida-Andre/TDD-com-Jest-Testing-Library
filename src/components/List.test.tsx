import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./list";

describe("App Component", () => {
  it("should render list items", () => {
    render(<List initialItems={["Diego", "Rodz", "Mayk"]} />);

    expect(screen.getByText("Diego")).toBeInTheDocument();
    expect(screen.getByText("Rodz")).toBeInTheDocument();
    expect(screen.getByText("Mayk")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    render(<List initialItems={[]} />);

    const inputElement = screen.getByPlaceholderText("Novo item");
    const addButton = screen.getByText("Adicionar");

    await userEvent.type(inputElement, "Novo");
    await userEvent.click(addButton);

    await waitFor(async () => {
      expect(screen.getByText("Novo")).toBeInTheDocument();
    });
  });

  it("should be able to add remove item to the list", async () => {
    render(<List initialItems={[""]} />);

    const removeButtons = screen.getAllByText("Remover");

    await userEvent.click(removeButtons[0]);

    await waitFor(async () => {
      expect(screen.queryByText("Diego")).not.toBeInTheDocument();
    });
  });
});
