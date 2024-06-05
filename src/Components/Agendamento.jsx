import {Horario,TituloAgendamento,Titulomotivo, Inputmotivo, Motivo,SelectDay, Div1, Div2, Container, Button1,Button2, Button3,ButtonConfirmar,Parhorario } from '../Styles/Agendamento.js'

const Sobre = ({ paragraph }) => {
    return (
        <Container>
            <Div1>
                <Div1>{paragraph}</Div1>
                <Div1 style={{backgroundColor:"#a9a9a9", padding:'80px 100px', margin:'10px'}}></Div1>
            </Div1>
            <Div2>
                <SelectDay>
                    <TituloAgendamento>selecione o dia</TituloAgendamento>
                    <Parhorario>calendario</Parhorario>
                    <hr />
                </SelectDay>
                
                <Horario>
                    <Parhorario>horarios</Parhorario>
                    <div style={{display:'flex'}}>
                    <Button1>08:00</Button1>
                    <Button2>09:30</Button2>
                    <Button3>11:00</Button3>
                    </div>
                </Horario>
                <Motivo>
                    <Titulomotivo>motivo</Titulomotivo>
                    <Inputmotivo type="text" placeholder="Digite seus motivos para o agendamento..." />
                    <ButtonConfirmar>confirmar agendamente</ButtonConfirmar>
                </Motivo>
            </Div2>
        </Container>
    )
}

export default Sobre;