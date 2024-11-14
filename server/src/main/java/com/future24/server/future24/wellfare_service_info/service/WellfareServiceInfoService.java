package com.future24.server.future24.wellfare_service_info.service;

import com.future24.server.future24.wellfare_service_info.mapper.WellfareServiceInfoMapper;
import com.future24.server.future24.wellfare_service_info.vo.WellfareServiceInfoVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class WellfareServiceInfoService {

    private final WellfareServiceInfoMapper wellfareServiceInfoMapper;

    public Map<String, List<WellfareServiceInfoVO>> getWellfareService(List<String> keywords) {
        Map<String, List<WellfareServiceInfoVO>> result = new HashMap<>();

        for (String keyword : keywords) {
            List<WellfareServiceInfoVO> serviceInfoList = wellfareServiceInfoMapper.findByServiceDescriptionKeywords(List.of(keyword));
            result.put(keyword, serviceInfoList);
        }

        return result;
    }
}
