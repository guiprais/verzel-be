--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.1 (Debian 14.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: verzel; Type: DATABASE; Schema: -; Owner: root
--

CREATE DATABASE verzel WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE verzel OWNER TO root;

\connect verzel

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: classes; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.classes (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    class_date date NOT NULL,
    module_id uuid
);


ALTER TABLE public.classes OWNER TO root;

--
-- Name: modules; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.modules (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.modules OWNER TO root;

--
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public.users OWNER TO root;

--
-- Data for Name: classes; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.classes (id, name, class_date, module_id) FROM stdin;
2b2f7ddd-966a-4546-b2b0-c610d8994afd	teste	2022-01-22	764eca87-39e8-417c-8a58-f4e9426e572c
872754dd-bf97-47d7-a876-a1f733123c43	Express	2022-02-04	06dba192-18b0-4d13-8e66-e56c30e1fc1b
1c5c61e7-ed8f-4d37-a905-41ce017d4074	Adonis	2022-01-28	06dba192-18b0-4d13-8e66-e56c30e1fc1b
d06005d6-74e8-471f-a94f-c1447f550a73	Nest	2022-02-06	06dba192-18b0-4d13-8e66-e56c30e1fc1b
8604d557-3240-4d52-8344-cb299b4f2e0b	Noções de Lógica	2022-02-24	2ce2c393-0b73-4026-a595-34e9efb34e91
fc6dffbb-c6ef-402d-a3ce-099e151c8a48	SQL	2022-01-29	9205f7d1-2049-4344-8a10-6b2513912923
9d76e055-1c8c-4579-9541-b128e54f4857	MongoDB	2022-04-15	9205f7d1-2049-4344-8a10-6b2513912923
0018f4b8-6d13-4a2a-aac3-5ae393688aab	Componentes de Classe	2022-01-28	98b5bed6-588c-4c99-a527-74f196e93aca
80b28ad7-f878-4573-a667-711292f91d0f	Hooks	2022-01-29	98b5bed6-588c-4c99-a527-74f196e93aca
\.


--
-- Data for Name: modules; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.modules (id, name) FROM stdin;
764eca87-39e8-417c-8a58-f4e9426e572c	Java
98b5bed6-588c-4c99-a527-74f196e93aca	ReacJS
06dba192-18b0-4d13-8e66-e56c30e1fc1b	NodeJS
2ce2c393-0b73-4026-a595-34e9efb34e91	Lógica de Programação
9205f7d1-2049-4344-8a10-6b2513912923	Banco de Dados
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.users (id, email, password) FROM stdin;
18366c9c-1e37-401d-bd18-9b49657074a3	admin@admin.com	admin
\.


--
-- Name: classes classes_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.classes
    ADD CONSTRAINT classes_id_key UNIQUE (id);


--
-- Name: modules modules_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_id_key UNIQUE (id);


--
-- Name: users users_id_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_key UNIQUE (id);


--
-- Name: classes classes_module_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.classes
    ADD CONSTRAINT classes_module_id_fkey FOREIGN KEY (module_id) REFERENCES public.modules(id);


--
-- PostgreSQL database dump complete
--

