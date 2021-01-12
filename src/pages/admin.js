import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import {useStream} from "hooks"
import {useEffect, useState} from "react"
import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 3rem;
    font-size: 3rem;
`

const FormField = styled.div`
    display: grid;
    row-gap: 1rem;
`

const Label = styled.label`
    color: ${({theme}) => theme.colors.white};
`

const Input = styled.input`
    padding: 1rem 2rem;
    border: none;
`

const Button = styled.button`
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.white};
    border: 0.4rem solid ${({theme}) => theme.colors.black};
    margin-top: 5rem;
    cursor: pointer;
`

const AdminPage = () => {
    const streamCtx = useStream()
    const [stream, setStream] = useState({title: "", guest: ""})

    useEffect(() => {
        if (streamCtx.stream) {
            setStream(streamCtx.stream)
        }
    }, [streamCtx])

    const onChange = event => {
        setStream(stream => ({
            ...stream,
            [event.target.name]: event.target.value,
        }))
    }

    const onSubmit = event => {
        event.preventDefault()
        streamCtx.updateStream(streamCtx.stream.id, stream)
    }

    return (
        <>
            <SEO title="🎥 bg codes twitch overlay" description="" />

            <Background />

            <Form onSubmit={onSubmit}>
                <FormField>
                    <Label htmlFor="title">title</Label>

                    <Input
                        type="text"
                        name="title"
                        id="title"
                        value={stream?.title}
                        onChange={onChange}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="guest">guest</Label>

                    <Input
                        type="text"
                        name="guest"
                        value={stream?.guest}
                        onChange={onChange}
                    />
                </FormField>
                <Button>save</Button>
            </Form>
        </>
    )
}

export default AdminPage
