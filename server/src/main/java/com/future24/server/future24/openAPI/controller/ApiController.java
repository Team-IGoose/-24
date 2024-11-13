package com.future24.server.future24.openAPI.controller;

import com.future24.server.future24.openAPI.service.OpenApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
public class ApiController {

    private final OpenApiService openApiService;


    @GetMapping("/api/data")
    public ResponseEntity<String> getData(@RequestParam String ability, @RequestParam String workRgn) {
        String result = openApiService.fetchData(ability, workRgn);
        return ResponseEntity.ok(result);
    }
}