import React, { Component } from "react";
import Form from "react-validation/build/form";
import { Box, Center, VStack, HStack, Heading, FormControl, Button} from '@chakra-ui/react'
//import Input from "react-validation/build/input";
import { Input }   from '@chakra-ui/react'

import CheckButton from "react-validation/build/button";
//import { Input } from '@chakra-ui/react'
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import AuthService from "../services/auth.service";
import { ReactComponent as Logo } from '../Assets/Images/logo.svg';
import '../Assets/Styles/Login.css';


import { withRouter } from '../common/with-router';

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            show: false
        };
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        console.log("am here")
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.router.navigate("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <Center h='100vh'>
                <HStack spacing={0} >
                    <Box
                        w={['full', 'sm']}
                        h='400px'
                        p={[8, 10]}
                        // borderLeft='1px'
                        // borderTop='1px'
                        // borderBottom='1px'
                        boxShadow='2xl'
                        rounded='md'
                        bg='white'
                        borderColor={['', 'gray.300']}
                        borderLeftRadius={10}
                        borderRightRadius={0}
                        backgroundColor='rgba(255,255,255,0.7)'
                    >
                        <VStack spacing={4} w='full'>
                            <VStack spacing={1} align={['flex-start','center']} w='full'>
                                <Heading w='40'><Logo/></Heading>
                            </VStack>


                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <FormControl>
                            <Input type="text"
                                   className="form-control"
                                   name="username"
                                   value={this.state.username}
                                   onChange={this.onChangeUsername}
                                   validations={[required]}
                                   variant='filled'
                                   placeholder='Login'
                                   mt='4' borderRadius={17}
                                   />
                            <InputGroup size='md'>
                                <Input pr='4.5rem' type={this.state.show ? 'text' : 'password'}
                                       placeholder='Mot de passe'
                                       variant='filled' mt='5'
                                       borderRadius={17}
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.onChangePassword}
                                       validations={[required]}/>
                                <InputRightElement w='4.5rem' mt='5'>
                                    <Button h='1.75rem' size='sm' bg='gray.300' borderRadius={17} onClick={this.handleClick}>
                                        {this.state.show ? <BiHide /> : <BiShowAlt /> }
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <HStack justify='center' mt='5'>
                            <Button variant='link' colorScheme='blue'>
                                Mot de passe oublié?
                            </Button>
                        </HStack>

                        <Button colorScheme='blue' w='60%' borderRadius={17}
                                disabled={this.state.loading}
                        type="submit">
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Se connecter</span>
                        </Button>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />


                    </Form>
                        </VStack>
            </Box>
                    <Box id="bg" borderRightRadius={10}>
                        <div style={{height:'400px', width:'200px'}} ></div>
                    </Box>
                </HStack>
            </Center>
        );
    }
}

export default withRouter(Login);
