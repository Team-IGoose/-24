package com.future24.server.future24.wellfare_service_info.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WellfareServiceInfoRequest {

    private List<String> keywords;
}
