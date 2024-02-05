 FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY src/main/resources/application.properties /application.properties
COPY ./out/artifacts/Flashcards_jar/Flashcards.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar", "--spring.config.location=classpath:/docker.properties"]