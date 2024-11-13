package com.future24.server.future24.storeInformation.service;

import com.future24.server.future24.storeInformation.mapper.StoreInformationMapper;
import com.future24.server.future24.storeInformation.vo.StoreInformationVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StoreInformationService {

    private final StoreInformationMapper storeInformationMapper;

    public List<StoreInformationVO> getStoreInformation(String startValue) {
        return storeInformationMapper.findByDistrictName(startValue);
    }
}
