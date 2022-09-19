import { Component } from "react";
import {Button, Checkbox, Dropdown, Form, Input, Range} from "react-daisyui";

class Content extends Component {

    state =  0.2 ;

    render() {
        return (
            <div className="grid grid-cols-3 gap-5 pt-1 pb-1 place-content-center">
                <div></div>
                <img className="place-self-center my-32 rounded-full" src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeie4f7n526mxpp2jgixpc4e7b7vpkae4sglks37lzj7tiwghxyvel4.ipfs.dweb.link/" alt=""/>
                <div></div>
                <div></div>
                <div className="grid grid-cols-2 my-5 p">
                    <Dropdown className="place-self-center md:w-52 s:w-13">
                        <Dropdown.Toggle>Currency</Dropdown.Toggle>
                        <Dropdown.Menu className="">
                            <Dropdown.Item>SOL</Dropdown.Item>
                            <Dropdown.Item>DUST</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form className="shadow bg-base-200 md:w-64 rounded-lg p-4">
                        <Form.Label title="Tails">
                            <Checkbox/>
                        </Form.Label>
                        <Form.Label title="Head">
                            <Checkbox />
                        </Form.Label>
                    </Form>
                </div>
                <div></div>
                <div></div>
                <Range />
                <div></div>
                <div></div>
                <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                    <Input value={this.state}/>
                </div>
                <div></div>
                <div></div>
                <Button title="Flip it !" value="Flip it !" placeholder="Flip it !"/>
            </div>
        );
    }
}


export default Content;