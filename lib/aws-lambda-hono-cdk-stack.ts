import * as cdk from 'aws-cdk-lib';
import {LambdaRestApi} from 'aws-cdk-lib/aws-apigateway';
import {FunctionUrlAuthType, Runtime} from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class AwsLambdaHonoCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new NodejsFunction(this, 'honoCdk', {
      entry: './lib/lambda/index.ts',
      handler: 'handler',
      runtime: Runtime.NODEJS_20_X
    })

    fn.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    })

    new LambdaRestApi(this, 'honoCdkApi', {
      handler: fn
    })
  }
}
