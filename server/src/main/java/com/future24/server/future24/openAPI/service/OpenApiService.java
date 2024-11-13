package com.future24.server.future24.openAPI.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

/**
 * 공공기관 채용 정보 조회 서비스
 */


@Service
public class OpenApiService {

    private final WebClient webClient;


    @Value("${openApi.serviceKey}")
    private String apiKey;


    public OpenApiService(WebClient.Builder webClientBuilder) {
        // DefaultUriBuilderFactory 생성 및 인코딩 모드 설정
        DefaultUriBuilderFactory uriBuilderFactory = new DefaultUriBuilderFactory();
        uriBuilderFactory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);

        // WebClient 생성 시 UriBuilderFactory 설정
        this.webClient = webClientBuilder
                .uriBuilderFactory(uriBuilderFactory)
                .baseUrl("https://apis.data.go.kr")
                .build();
    }

    public String fetchData(String ability, String workRgn, String recrutSe) {
        // API 요청 URL 생성
        StringBuilder urlBuilder = new StringBuilder("https://apis.data.go.kr/1051000/recruitment/list");
        urlBuilder.append("?serviceKey=").append(apiKey);
        urlBuilder.append("&resultType=").append("JSON");

        // 파라미터가 있을 경우에만 추가
        if (ability != null && !ability.isEmpty()) {
            urlBuilder.append("&acbgCondLst=").append(ability);
        }
        if (workRgn != null && !workRgn.isEmpty()) {
            urlBuilder.append("&workRgnLst=").append(workRgn);
        }
        if (recrutSe != null && !recrutSe.isEmpty()) {
            urlBuilder.append("&recrutSe=").append(recrutSe);
        }

        // 최종 URL 생성
        String uri = urlBuilder.toString();

        // 요청 URL 출력
        System.out.println("Request URL: " + uri);

        // WebClient 요청
        return webClient.get()
                .uri(uri)
                .header(HttpHeaders.USER_AGENT, "Mozilla/5.0")
                .header(HttpHeaders.ACCEPT, MediaType.APPLICATION_XML_VALUE)
                .header(HttpHeaders.REFERER, "https://www.data.go.kr")
                .header(HttpHeaders.ORIGIN, "https://www.data.go.kr")
                .retrieve()
                .bodyToMono(String.class)
                .doOnNext(response -> System.out.println("Response: " + response))
                .block();
    }
}
