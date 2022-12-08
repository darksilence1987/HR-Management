package org.team3.utility;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.xhite.exception.AuthServiceException;
import org.xhite.exception.ErrorType;

import java.util.Optional;

@Service
public class JwtTokenManager {
    @Value("${myjwt.secretKey}")
    private String secretkey;
    @Value("${myjwt.issuer}")
    private String issuer;
    @Value("${myjwt.audience}")
    private String audience;
    public String createToken(Long authid){
        String token = null;
        try{
           Algorithm algorithm = Algorithm.HMAC256(secretkey);
           token = JWT.create()
                   .withAudience(audience)
                   .withIssuer(issuer)
                   .withIssuedAt(new java.util.Date())
                   .withExpiresAt(new java.util.Date(System.currentTimeMillis() + 1000 * 60))
                   .withClaim("authid", authid)
                   .sign(algorithm);
           return token;
        }catch(Exception e){
            return null;
        }

    }
    public Optional<Long> getIdFromToken(String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256(secretkey);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withAudience(audience)
                    .withIssuer(issuer)
                    .build();
            DecodedJWT decodedToken = verifier.verify(token);
            if(decodedToken == null) throw new AuthServiceException(ErrorType.GECERSIZ_TOKEN);
            Long authid = decodedToken.getClaim("authid").asLong();
            return Optional.of(authid);
        }
        catch (Exception e){
            throw new AuthServiceException(ErrorType.GECERSIZ_TOKEN);
        }
    }
}

