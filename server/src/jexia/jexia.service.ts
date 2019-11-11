import { Injectable, Logger } from '@nestjs/common';
import {
    Client,
    dataOperations,
    DataOperationsModule,
    jexiaClient,
    UMSModule,
} from 'jexia-sdk-js/node';
import { IUMSCredentials, IUMSSignInOptions, IUMSUser } from 'jexia-sdk-js/api/ums/umsModule';

const credentials = {
    projectID: 'a7ee1afb-10fa-4773-890d-2371307279a8',
};

@Injectable()
export class JexiaService {
    private jexia: Client;
    private dataModule: DataOperationsModule;
    private ums: UMSModule;

    constructor() {
        this.init();
    }

    async init() {
        try {
            this.ums = new UMSModule();
            this.dataModule = dataOperations();
            this.jexia = await jexiaClient().init(credentials, this.dataModule, this.ums);
        } catch (e) {
            Logger.error(e);
        }
    }

    getJexia() {
        return this.jexia;
    }

    getDataModule() {
        return this.dataModule;
    }

    async signIn({ email, password, default: isDefault, alias }: IUMSSignInOptions): Promise<string> {
        try {
            return await this.ums.signIn({ email, password, default: isDefault, alias });
        } catch (e) {
            Logger.error(e);
            return null;
        }
    }

    async signUp({ email, password }: IUMSCredentials): Promise<IUMSUser> {
        try {
            return await this.ums.signUp({ email, password });
        } catch (e) {
            Logger.error(e);
            return null;
        }
    }

}
