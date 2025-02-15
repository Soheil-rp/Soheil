"use client";

import {
  Button,
  Input,
  Stack,
  Box,
  DrawerBackdrop,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { List } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { title } from "node:process";
import { Film } from "./dto/film";

const items = [
  { value: "a", title: "First name", text: "soheil" },
  { value: "b", title: "last name", text: "karami" },
  { value: "c", title: "number", text: "09305205723" },
];

const getlimititem = (
  input: { family: string; age: string }[],
  page: number,
  limit: number
): { family: string; age: number }[] => {
  const output = input.slice(5, 5);
  console.log(output);
  return [];
};


const film : Film[]= [
  { title: "dead pool vs wolvorine", id: 1 },
  { title: "oppenhimer", id: 2 },
  { title: "substance", id: 3 },
  { title: "inside outside2", id: 4 },
  { title: "moana2", id: 5 },
  { title: "dead pool", id: 6 },
  { title: "oppenhimereee", id: 7 },
  { title: "substancerrr", id: 8 },
  { title: "inside22", id: 9 },
  { title: "moana3", id: 10 },
  { title: "dead pool6", id: 11 },
  { title: "oppenhimer4", id: 12 },
  { title: "substance345435", id: 13 },
  { title: "outside", id: 14 },
  { title: "Rio", id: 15 },
]


const Demo = () => {
  const [movie , setMovie] = useState(1)
   
  const page = movie;
  const pagesize = 5;
  const count = 15;
  const startmovie = (movie - 1) * pagesize
  const endmovie = startmovie + pagesize
  const visibleItems = film.slice(startmovie, endmovie)
  const handlemade = (id: any) => {
  console.log(id)
  }
  

  
  return (
    <Stack>
      <HStack>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              position="relative"
              top="30px"
              border="none "
            >
              .
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <Stack width="full" height="250px">
              <DrawerHeader>
                <DrawerTitle textAlign="center" mb="15px">
                  porfile
                </DrawerTitle>
                <Image
                  src="https://imgs.search.brave.com/MdMUoI-o_Odq4-zJ1yHBJYVOBvJWhrpNMdGq-ebQa_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzQwLzA3LzAx/LzM2MF9GXzEwNDAw/NzAxNDRfaWRhTkdE/ZzVRUmtPaEhxTmRq/M1ZzN1BkTGROajdC/eTIuanBn"
                  width="full"
                  height="250px"
                />
              </DrawerHeader>
            </Stack>
            <DrawerBody dir="rtl" mt="20px">
              <VStack alignItems="flex-start" mt="40px">
                <AccordionRoot multiple defaultValue={["a"]}>
                  {items.map((item, index) => (
                    <AccordionItem key={index} value={item.value}>
                      <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                      <AccordionItemContent>{item.text}</AccordionItemContent>
                    </AccordionItem>
                  ))}
                </AccordionRoot>
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerActionTrigger>
              <Button>Save</Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
      <HStack justifyContent="space-around">
        <Link href="...">HOME</Link>
        <Link href="...">PROUDOCT</Link>
        <Link href="...">SHOPPING</Link>
        <Link href="...">ABOUT US</Link>
        <Link href="...">CONTACT US</Link>
      </HStack>
      <Flex alignItems="center" justifyContent="center">
        <Stack gap="4" align="flex-start" maxW="sm" mt="150px">
          <Image
            src="https://imgs.search.brave.com/JvbkgeMbkPtYiY1fHHYZ-uxPQ7TUnPa86X_jWz8Be1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYi9iNC9E/b3JuYV9sb2dvLnBu/Zw"
            margin="0 auto"
            width="200px"
          />

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text mb="20px" mt="10px" paddingRight="40px" textStyle="2xl">
              {" "}
              ورود به پنل کاربری
            </Text>
            <Text color="#7C7C7C" paddingRight="40px">
              لطفا نام کاربری و رمز عبور خودرا وارد کنید
            </Text>
          </Flex>
          <Field label="نام کاربری" mt="10px">
            <Input
              css={{
                width: "350PX",
                height: "35px",
                borderRadius: "10px",
              }}
            />
          </Field>
          <Field label="رمز عبور" mt="10px">
            <Input
              css={{
                width: "350px",
                height: "35px",
                borderRadius: "10px",
              }}
            />
          </Field>
          <Button
            type="submit"
            css={{
              width: "350px",
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>
          <Button
            type="submit"
            name="ورود"
            css={{
              width: "350px",
              border: "none",
              backgroundColor: "white",
              color: "red",
            }}
          >
            بازیابی رمز عبور
          </Button>
        </Stack>
      </Flex>
      <HStack css={{
        justifyContent:"space-around"
      }}>
         {visibleItems.map((index) => (
          <Text> {index.id} * {index.title} </Text>
        ))} 
      </HStack>
      <PaginationRoot
        count={15}
        pageSize={5}
        page={page}
        defaultPage={1}
        variant="solid"
        margin="0 auto"
        onPageChange={(e) => setMovie(e.page)}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
      {/* <VStack>
        {movie.map((event,index) => (
          <Stack key={event.id}>
            <Text>{index} - {event.title}</Text>
           <Button onClick={() => handlemade(event.id)}></Button>
          </Stack>
        ))}
      </VStack> */}
    </Stack>
  );
};
export default Demo;
