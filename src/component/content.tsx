import {Button, Checkbox, Dropdown, Form, Input, Range} from "react-daisyui";

function Content() {
    return (
        <div className="grid grid-cols-3 gap-2 pt-1 pb-1">
            <div></div>
            <div className="my-32">
                <Dropdown>
                    <Dropdown.Toggle>Currency</Dropdown.Toggle>
                    <Dropdown.Menu className="w-52">
                        <Dropdown.Item>SOL</Dropdown.Item>
                        <Dropdown.Item>DUST</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="shadow bg-base-200 w-64 rounded-lg p-4">
                    <Form.Label title="Tails">
                        <Checkbox />
                    </Form.Label>
                    <Form.Label title="Head">
                        <Checkbox />
                    </Form.Label>
                </Form>
            </div>
            <div></div>
            <div></div>
            <Range/>
            <div></div>
            <div></div>
            <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                <Input/>
            </div>
            <div></div>
            <div></div>
            <Button/>
        </div>
    );
}

export default Content;