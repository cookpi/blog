# Test Case: REST API <Badge text="mhma" />

## 시작하기

간단히 REST API 호출을 테스트하기 위한 가이드 문서입니다.<br/>
PUT, GET, POST 호출과 함께 JWT 토큰을 전송하는 내용으로 구성되어 있습니다.

## 사전 요구 사항
### JSON .NET 설치
에셋스토어에서 JSON.NET을 설치합니다. 이는 Nested Object를 Json String으로 변환하기 위해 필요합니다.
[JSON.NET 에셋스토어 링크](https://assetstore.unity.com/packages/tools/input-management/json-net-for-unity-11347)

## 샘플 코드
### PUT, GET, POST 구현부
```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using Newtonsoft.Json;

class RestApi
{
    public RestApi() { }

    public IEnumerator PutWithToken(string url, string token, dynamic request /* , System.Action<object> callback */)
    {
        dynamic paramsJson = JsonConvert.SerializeObject(request);
        byte[] myData = System.Text.Encoding.UTF8.GetBytes(paramsJson);
        var www = new UnityWebRequest (url, UnityWebRequest.kHttpVerbPUT);
        www.uploadHandler = (UploadHandler) new UploadHandlerRaw(myData);
        www.downloadHandler = (DownloadHandler) new DownloadHandlerBuffer();
        www.SetRequestHeader("Content-Type", "application/json");
        www.SetRequestHeader("Authorization", "Bearer " + token);
        yield return www.SendWebRequest();

        if(www.isNetworkError || www.isHttpError) {
            Debug.Log("API Error");
            Debug.Log(www.isNetworkError);
            Debug.Log(www.isHttpError);
            // Error Handling
        } else {
            dynamic response = JsonConvert.DeserializeObject(www.downloadHandler.text);
            if (response["error"] != null)
            {
                Debug.Log("API Error");
                // Error Handling
            }
            else
            {
                Debug.Log("API Success");
                // ResponseClass response = JsonConvert.DeserializeObject<ResponseClass>(response)
            }
            Debug.Log(response);
        }
    }

    public IEnumerator GetWithToken(string url, string token /* , System.Action<object> callback */) {
        UnityWebRequest www = UnityWebRequest.Get(url);
        www.SetRequestHeader("Content-Type", "application/json");
        www.SetRequestHeader("Authorization", "Bearer " + token);
        yield return www.SendWebRequest();

        if(www.isNetworkError || www.isHttpError) {
            Debug.Log(www.error);
        }
        else {
            // Result (Same as Put Example)
            Debug.Log(www.downloadHandler.text);
        }
    }

    public IEnumerator Post(string url, dynamic request /* , System.Action<object> callback */) {
        dynamic paramsJson = JsonConvert.SerializeObject(request);
        byte[] myData = System.Text.Encoding.UTF8.GetBytes(paramsJson);
        var www = new UnityWebRequest (url, UnityWebRequest.kHttpVerbPOST);
        www.uploadHandler = (UploadHandler) new UploadHandlerRaw(myData);
        www.downloadHandler = (DownloadHandler) new DownloadHandlerBuffer();
        www.SetRequestHeader("Content-Type", "application/json");
        yield return www.SendWebRequest();

        if(www.isNetworkError || www.isHttpError) {
            Debug.Log(www.error);
        }
        else {
            // Result (Same as Put Example)
            Debug.Log(www.downloadHandler.text);
        }
    }
}
```
### 사용 예시
```csharp
class PutUserParam
{
    public string name = "mamh";
    public int level = 1000;
    public string hid = "h11101";
    public List<Dictionary<string, object>> deck = new List<Dictionary<string, object>>();
}

class PostLoginParam
{
    public string uid = "uid1231231";
}

public class IntroScene : MonoBehaviour
{
    public Start()
    {
        string api_endpoint = "xxxx";
        string token = "xxx"; // JWT Token
        RestApi api = new RestApi();
        PutUserParam putUserParams = new PutUserParam();
        Dictionary<string, object> deck = new Dictionary<string, object>();
        deck.Add("hid", "h11111");
        deck.Add("level", 1000);
        putUserParams.deck.Add(deck);
        StartCoroutine(api.PutWithToken(api_endpoint, token, putUserParams));
        StartCoroutine(api.GetWithToken(api_endpoint, token));
        StartCoroutine(api.Post(api_endpoint, new PostLoginParam()));
    }
}
```
