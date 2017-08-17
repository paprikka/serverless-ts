import {Context, Callback} from 'aws-lambda'
import {APIGatewayEventWrapped} from './types/APIGatewayEventWrapped'
import {ContextWrapped} from './types/ContextWrapped'
import config from './config'

export const hello = (event: APIGatewayEventWrapped | {}, context: ContextWrapped, callback: Callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
          {
            TEST_VAR_0: config.TEST_VAR_0
          }
      ),
    };

    callback(null, response)
}