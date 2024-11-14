package com.future24.server.future24.openAPI.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

@Service
//@RequiredArgsConstructor
public class OpenApiService {

    private final WebClient webClient;


    @Value("${openApi.serviceKey}")
    private String apiKey;


    public OpenApiService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://apis.data.go.kr").build();
    }

    public String fetchData(String ability, String workRgn) {
        String uri = String.format("https://apis.data.go.kr/1051000/recruitment/list?serviceKey=%s&acbgCondLst=%s&workRgnLst=%s",
                apiKey, ability, workRgn);

        System.out.println("Request URL: " + uri);

        return webClient.get()
                .uri(uri)
                .header(HttpHeaders.USER_AGENT, "Mozilla/5.0")
                .header(HttpHeaders.ACCEPT, MediaType.APPLICATION_XML_VALUE)
                .retrieve()
                .bodyToMono(String.class)
                .doOnNext(response -> System.out.println("Response: " + response))
                .block();
    }

}
