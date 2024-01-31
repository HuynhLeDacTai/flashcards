FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY ./out/artifacts/Flashcards_jar/Flashcards.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]