The indexPostHandler function is not doing anything. It should be calling the generateResponse function to generate a response and send it back to the client. The chatGPTPostHandler should also be calling the generateResponse function.

The res.render in the indexHandler should also include the response from the generateResponse function, so that the response can be displayed on the page.

The dataCompletionPersistance array should be declared outside of the generateResponse function, so that it can persist between requests.
