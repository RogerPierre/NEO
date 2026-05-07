import { ResponseNBTP, RequestNBTP, ProtocoloNBTP } from "../protocolo/NBTP";
import { ComunicadorClient } from "../comunicacao/transacition";

export class BalanceUseCase {


    public async balance(texto: string): Promise<String> {
        //montar a mensagem de requisição
        let protocolo: ProtocoloNBTP = new ProtocoloNBTP();
        let req: RequestNBTP = protocolo.stringToReq(texto);

        let msgReq = protocolo.reqToString(req);

        let comunicador: ComunicadorClient = new ComunicadorClient();
        //enviar a mensagem de reuisição
        let msgResp: string = await comunicador.enviarMsg(msgReq);

        //decodificar a resposta e retornar a string
        let resp: ResponseNBTP = protocolo.stringToRes(msgResp);

        return resp.MENSAGE;
    }

}