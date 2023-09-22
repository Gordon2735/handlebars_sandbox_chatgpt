response_text = ""
    function_call_detected = False
    for response_chunk in response_generator:
        # print(f"Response chunk: {response_chunk}")
        if "choices" in response_chunk:
            deltas = response_chunk["choices"][0]["delta"]
            if "function_call" in deltas:
                function_call_detected = True
                if "name" in deltas["function_call"]:
                    func_call["name"] = deltas["function_call"]["name"]
                if "arguments" in deltas["function_call"]:
                    func_call["arguments"] += deltas["function_call"]["arguments"]
            if (
                function_call_detected
                and response_chunk["choices"][0].get("finish_reason") == "function_call"
            ):
                print(f"Function generation requested, calling function")
                function_response_generator = call_3A_function(
                    messages, func_call, user_id
                )
                for function_response_chunk in function_response_generator:
                    if "choices" in function_response_chunk:
                        deltas = function_response_chunk["choices"][0]["delta"]
                        if "content" in deltas:
                            response_text += deltas["content"]
                            yield response_text
            elif "content" in deltas and not function_call_detected:
                response_text += deltas["content"]
                yield response_text