package com.future24.server.future24.storeInformation.controller;

import com.future24.server.future24.storeInformation.request.StoreInformationRequest;
import com.future24.server.future24.storeInformation.service.StoreInformationService;
import com.future24.server.future24.storeInformation.vo.StoreInformationVO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class StoreInformationController {

    private final StoreInformationService storeInformationService;

    @GetMapping("/api/store_info")
    public ResponseEntity<List<StoreInformationVO>> getStoreInformation(@RequestBody StoreInformationRequest request) {
        String startValue = request.getStartValue();
        List<StoreInformationVO> result = storeInformationService.getStoreInformation(startValue);
        return ResponseEntity.ok(result);
    }
}
