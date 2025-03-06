# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**dialogUserIdListGet**](DefaultApi.md#dialogUserIdListGet) | **GET** /dialog/{user_id}/list |  |
| [**dialogUserIdSendPost**](DefaultApi.md#dialogUserIdSendPost) | **POST** /dialog/{user_id}/send |  |
| [**friendDeleteUserIdPut**](DefaultApi.md#friendDeleteUserIdPut) | **PUT** /friend/delete/{user_id} |  |
| [**friendSetUserIdPut**](DefaultApi.md#friendSetUserIdPut) | **PUT** /friend/set/{user_id} |  |
| [**loginPost**](DefaultApi.md#loginPost) | **POST** /login |  |
| [**postCreatePost**](DefaultApi.md#postCreatePost) | **POST** /post/create |  |
| [**postDeleteIdPut**](DefaultApi.md#postDeleteIdPut) | **PUT** /post/delete/{id} |  |
| [**postFeedGet**](DefaultApi.md#postFeedGet) | **GET** /post/feed |  |
| [**postGetIdGet**](DefaultApi.md#postGetIdGet) | **GET** /post/get/{id} |  |
| [**postUpdatePut**](DefaultApi.md#postUpdatePut) | **PUT** /post/update |  |
| [**userGetIdGet**](DefaultApi.md#userGetIdGet) | **GET** /user/get/{id} |  |
| [**userRegisterPost**](DefaultApi.md#userRegisterPost) | **POST** /user/register |  |
| [**userSearchGet**](DefaultApi.md#userSearchGet) | **GET** /user/search |  |



## dialogUserIdListGet

> List&lt;DialogMessage&gt; dialogUserIdListGet(userId)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String userId = "userId_example"; // String | 
        try {
            List<DialogMessage> result = apiInstance.dialogUserIdListGet(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#dialogUserIdListGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | |

### Return type

[**List&lt;DialogMessage&gt;**](DialogMessage.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Диалог между двумя пользователями |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## dialogUserIdSendPost

> void dialogUserIdSendPost(userId, dialogUserIdSendPostRequest)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String userId = "userId_example"; // String | 
        DialogUserIdSendPostRequest dialogUserIdSendPostRequest = new DialogUserIdSendPostRequest(); // DialogUserIdSendPostRequest | 
        try {
            void result = apiInstance.dialogUserIdSendPost(userId, dialogUserIdSendPostRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#dialogUserIdSendPost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | |
| **dialogUserIdSendPostRequest** | [**DialogUserIdSendPostRequest**](DialogUserIdSendPostRequest.md)|  | [optional] |

### Return type

[**void**](Void.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешно отправлено сообщение |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## friendDeleteUserIdPut

> void friendDeleteUserIdPut(userId)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String userId = "userId_example"; // String | 
        try {
            void result = apiInstance.friendDeleteUserIdPut(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#friendDeleteUserIdPut");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | |

### Return type

[**void**](Void.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Пользователь успешно удалил из друзей пользователя |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## friendSetUserIdPut

> void friendSetUserIdPut(userId)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String userId = "userId_example"; // String | 
        try {
            void result = apiInstance.friendSetUserIdPut(userId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#friendSetUserIdPut");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | |

### Return type

[**void**](Void.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Пользователь успешно указал своего друга |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## loginPost

> LoginPost200Response loginPost(loginPostRequest)



Упрощенный процесс аутентификации путем передачи идентификатор пользователя и получения токена для дальнейшего прохождения авторизации

### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        LoginPostRequest loginPostRequest = new LoginPostRequest(); // LoginPostRequest | 
        try {
            LoginPost200Response result = apiInstance.loginPost(loginPostRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#loginPost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loginPostRequest** | [**LoginPostRequest**](LoginPostRequest.md)|  | [optional] |

### Return type

[**LoginPost200Response**](LoginPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешная аутентификация |  -  |
| **400** | Невалидные данные |  -  |
| **404** | Пользователь не найден |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## postCreatePost

> String postCreatePost(postCreatePostRequest)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        PostCreatePostRequest postCreatePostRequest = new PostCreatePostRequest(); // PostCreatePostRequest | 
        try {
            String result = apiInstance.postCreatePost(postCreatePostRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#postCreatePost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postCreatePostRequest** | [**PostCreatePostRequest**](PostCreatePostRequest.md)|  | [optional] |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешно создан пост |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## postDeleteIdPut

> void postDeleteIdPut(id)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String id = "id_example"; // String | 
        try {
            void result = apiInstance.postDeleteIdPut(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#postDeleteIdPut");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**void**](Void.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешно удален пост |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## postFeedGet

> List&lt;Post&gt; postFeedGet(offset, limit)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        BigDecimal offset = new BigDecimal("0"); // BigDecimal | 
        BigDecimal limit = new BigDecimal("10"); // BigDecimal | 
        try {
            List<Post> result = apiInstance.postFeedGet(offset, limit);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#postFeedGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **offset** | **BigDecimal**|  | [optional] [default to 0] |
| **limit** | **BigDecimal**|  | [optional] [default to 10] |

### Return type

[**List&lt;Post&gt;**](Post.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешно получены посты друзей |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## postGetIdGet

> Post postGetIdGet(id)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String id = "id_example"; // String | 
        try {
            Post result = apiInstance.postGetIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#postGetIdGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**|  | |

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешно получен пост |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## postUpdatePut

> void postUpdatePut(postUpdatePutRequest)



### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.auth.*;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");
        
        // Configure HTTP bearer authorization: bearerAuth
        HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
        bearerAuth.setBearerToken("BEARER TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        PostUpdatePutRequest postUpdatePutRequest = new PostUpdatePutRequest(); // PostUpdatePutRequest | 
        try {
            void result = apiInstance.postUpdatePut(postUpdatePutRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#postUpdatePut");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postUpdatePutRequest** | [**PostUpdatePutRequest**](PostUpdatePutRequest.md)|  | [optional] |

### Return type

[**void**](Void.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешно изменен пост |  -  |
| **400** | Невалидные данные ввода |  -  |
| **401** | Неавторизованный доступ |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## userGetIdGet

> User userGetIdGet(id)



Получение анкеты пользователя

### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String id = "id_example"; // String | Идентификатор пользователя
        try {
            User result = apiInstance.userGetIdGet(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#userGetIdGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Идентификатор пользователя | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешное получение анкеты пользователя |  -  |
| **400** | Невалидные данные |  -  |
| **404** | Анкета не найдена |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## userRegisterPost

> UserRegisterPost200Response userRegisterPost(userRegisterPostRequest)



Регистрация нового пользователя

### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        UserRegisterPostRequest userRegisterPostRequest = new UserRegisterPostRequest(); // UserRegisterPostRequest | 
        try {
            UserRegisterPost200Response result = apiInstance.userRegisterPost(userRegisterPostRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#userRegisterPost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userRegisterPostRequest** | [**UserRegisterPostRequest**](UserRegisterPostRequest.md)|  | [optional] |

### Return type

[**UserRegisterPost200Response**](UserRegisterPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешная регистрация |  -  |
| **400** | Невалидные данные |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |


## userSearchGet

> List&lt;User&gt; userSearchGet(firstName, lastName)



Поиск анкет

### Example

```java
// Import classes:
import ru.paf.ApiClient;
import ru.paf.ApiException;
import ru.paf.Configuration;
import ru.paf.models.*;
import ru.paf.highload.DefaultApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String firstName = "Конст"; // String | Условие поиска по имени
        String lastName = "Оси"; // String | Условие поиска по фамилии
        try {
            List<User> result = apiInstance.userSearchGet(firstName, lastName);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#userSearchGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **firstName** | **String**| Условие поиска по имени | |
| **lastName** | **String**| Условие поиска по фамилии | |

### Return type

[**List&lt;User&gt;**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Успешные поиск пользователя |  -  |
| **400** | Невалидные данные |  -  |
| **500** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |
| **503** | Ошибка сервера |  * Retry-After - Время, через которое еще раз нужно сделать запрос <br>  |

