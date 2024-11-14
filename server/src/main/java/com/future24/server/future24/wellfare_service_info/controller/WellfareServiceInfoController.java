package com.future24.server.future24.wellfare_service_info.controller;

import com.future24.server.future24.wellfare_service_info.request.WellfareServiceInfoRequest;
import com.future24.server.future24.wellfare_service_info.service.WellfareServiceInfoService;
import com.future24.server.future24.wellfare_service_info.vo.WellfareServiceInfoVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class WellfareServiceInfoController {

    private final WellfareServiceInfoService wellfareServiceInfoService;

    @PostMapping("/api/wellfare")
    public ResponseEntity<Map<String, List<WellfareServiceInfoVO>>> getWellfareServiceInfo(@RequestBody WellfareServiceInfoRequest request) {
        List<String> keywords = request.getKeywords();
        Map<String, List<WellfareServiceInfoVO>> result = wellfareServiceInfoService.getWellfareService(keywords);
        return ResponseEntity.ok(result);
    }
}
