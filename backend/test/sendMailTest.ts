import {expect} from 'chai'
import {sendGridMail} from '../src/services/SendgridMailService'
import {describe, it} from "node:test";

describe('envio de e-mail com sendgrid', async () => {
    const send = await sendGridMail()
        .to('wgwalisongomes@gmail.com')
        .subject("Teste de envio de e-mail")
        .content("Esta é uma mensagem teste")
        .send()
    await it("deve retornar http 200 para confirmar o envio", async () => {
        expect(send).to.be.true
    })
})