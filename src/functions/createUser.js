'use strict';
const AWS = require('aws-sdk')
module.exports.createUser = async (event, context) => {
  const body = JSON.parse(event.body)
  const password = body.password
  const newUserParams = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: {
      pk: username,
      password: password
    }
  }
  try{
    const dynamodb = new AWS.DynamoDB.DocumentClient()
    const putResult = await dynamodb.put(newUserParams).promise()
    return {
      statusCode: 201,
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Authorization'

      }
    }
  }catch(putError){
    console.log('putError',putError)
    return new Error('There was an error')

  }


};
